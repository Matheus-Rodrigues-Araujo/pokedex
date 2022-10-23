export default function Header({ handleInput }) {
  return (
    <header>
      <div className="input-div">
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          defaultValue={e=>e.target.value}
          autoFocus="on"
          onChange={e => handleInput(e.target.value)}
        ></input>
        {/* <button
          className="submit-btn"
          //  onClick={search}
        >
          OK
        </button> */}
      </div>
    </header>
  )
}
