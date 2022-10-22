// import pokeballPng from

export default function LoadingAnimation() {
  return (
    
    <div className="animation-container" style={{ display: 'flex' }}>
      <img
        width='450px'
        src={process.env.PUBLIC_URL + '/images/pokeball.png'}
        alt="A pokeball spinning"
      />
    </div>
  )
}
