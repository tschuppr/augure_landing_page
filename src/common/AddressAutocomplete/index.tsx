import React, { useState, useEffect } from 'react'
import Input from '../../common/Input'
import { Container, StyledList, StyledListElement } from './styles'

const AddressAutocomplete = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectedSuggestion, setSelectedSuggestion] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Effect to debounce API calls
  useEffect(() => {
    console.log(inputValue)
    if (inputValue.length <= 3 || selectedSuggestion) {
      setSuggestions([])
      return
    }

    const debounceTimer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://data.geopf.fr/geocodage/completion/?text=${inputValue}&maximumResponses=3&type=StreetAddress`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.ok) throw new Error('Network response was not ok')

        const data = await response.json()
        const suggestions = data.results.map((result: any) => result.fulltext)
        setSuggestions(suggestions)
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    }, 300) // ⏱️ 300ms debounce

    return () => clearTimeout(debounceTimer)
  }, [inputValue, selectedSuggestion])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
    setSelectedSuggestion(false)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(true)
    setInputValue(suggestion)
    setSuggestions([])
  }

  return (
    <>
      <Container>
        <Input
          type="text"
          name="address"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Your Address"
        />
        {suggestions.length > 0 && (
          <StyledList
            // bordered={false}
            dataSource={suggestions}
            renderItem={(suggestion, index) => (
              <StyledListElement key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </StyledListElement>
            )}
          />
        )}
      </Container>
    </>
  )
}

export default AddressAutocomplete
