const AuditInfoSvg = () => (
  <svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .title { font: bold 16px sans-serif; }
      .desc { font: 14px sans-serif; fill: #333; }
      .icon-bg { fill:rgb(255, 255, 255); stroke: #4285f4; stroke-width: 2; }
      .line { stroke: #4285f4; stroke-width: 2; fill: none; }
      .icon { fill: #4285f4; }
    `}</style>

    {/* Central Audit global icon and text */}
    <g transform="translate(40, 0)">
      <rect className="icon-bg" x="0" y="0" width="180" height="50" rx="8" />
      {/* <circle className="icon-bg" cx="40" cy="20" r="20" /> */}
      {/* Icon: Bar chart */}
      {/* <g className="icon" transform="translate(30,10)">
        <rect x="0" y="10" width="4" height="10" />
        <rect x="6" y="5" width="4" height="15" />
        <rect x="12" y="0" width="4" height="20" />
      </g> */}
      <text x="2" y="20" className="title">
        Audit global des achats
      </text>
      <text x="2" y="40" className="desc">
        Par type de produits et fournisseurs
      </text>
    </g>

    {/* Lines to branches */}
    <line className="line" x1="250" y1="60" x2="150" y2="140" />
    <line className="line" x1="250" y1="60" x2="350" y2="140" />

    {/* Détail des remises icon and text */}
    <g transform="translate(80, 140)">
      <rect className="icon-bg" x="0" y="0" width="40" height="40" rx="8" />
      {/* Icon: Calendar */}
      <g className="icon" transform="translate(8,8)">
        <rect x="0" y="4" width="24" height="20" fill="none" stroke="#2e186a" strokeWidth="2" />
        <line x1="0" y1="10" x2="24" y2="10" stroke="#2e186a" strokeWidth="2" />
        <circle cx="6" cy="16" r="1.5" />
        <circle cx="12" cy="16" r="1.5" />
        <circle cx="18" cy="16" r="1.5" />
      </g>
      <text x="50" y="20" className="title">
        Détail des remises recouvrables
      </text>
      <text x="50" y="40" className="desc">
        Mois par mois
      </text>
    </g>

    {/* Suivi des remboursements icon and text */}
    <g transform="translate(320, 140)">
      <rect className="icon-bg" x="0" y="0" width="40" height="40" rx="8" />
      {/* Icon: Return arrow */}
      <g className="icon" transform="translate(8,10)">
        <path d="M20 10 H8 L12 6 M8 10 L12 14" stroke="#2e186a" strokeWidth="2" fill="none" />
      </g>
      <text x="50" y="20" className="title">
        Suivi des remboursements
      </text>
      <text x="50" y="40" className="desc">
        Des produits
      </text>
    </g>
  </svg>
)

export default AuditInfoSvg
