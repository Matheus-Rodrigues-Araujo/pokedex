
export default function BadgeType({item }) {
  
  const badgeTypes = {
    fire: 'orangered',

    water: 'darkblue',

    grass: 'rgb(19, 85, 53)',

    normal: 'rgb(196, 168, 11)',

    flying: 'rgb(47, 93, 100)',

    bug: 'rgba(0, 182, 82, 0.79)',

    poison: 'purple',

    electric: 'orange',

    ground: 'rgb(150, 44, 44)',

    psychic: 'rgb(250 68 203)',
    //psychic: 'rgb(197,10,50)'
    ghost: 'rgb(73, 73, 73)',

    dark: 'rgb(51, 48, 48)',

    rock: 'rgb(95 58 58)',

    fairy: 'rgb(143, 3, 73)',

    dragon: 'darkcyan',

    ice: 'rgb(1, 84, 139)',

    fighting: '#4a6e4a',

    steel: 'rgb(104 132 146 / 88%)'
  }

  
  return (
    <div className="badge-type">
      {item.types.map(item => (
        <div
          className="badge"
          // key={item.name}
          style={{backgroundColor: badgeTypes[item.type.name]}}
        >
          {item.type.name[0].toUpperCase() + item.type.name.slice(1)}
        </div>
      )
      )

      }
    </div>
  )
}
