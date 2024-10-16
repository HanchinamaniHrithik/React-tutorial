const showErr = () => {
  alert('This function works, some error here')
}
const showErr2 = () => {
  alert(
    'This function works on elements too Hrithik chill, ooh and yeah some error here'
  )
}

const Book = (Oprops) => {
  console.log(Oprops)

  const { imgLink, title, author, children } = Oprops.items
  return (
    <div className='BookClass'>
      <img
        onMouseEnter={() => {
          console.log({ title })
        }}
        src={imgLink}
        alt={title}
      />
      <h2 style={{ color: 'brown' }}>{title}</h2>

      <button type='button' onClick={showErr2}>
        Somebuttontext
      </button>

      <h5 onClick={showErr} style={{ color: 'grey' }}>
        {author}
      </h5>
      {children}
    </div>
  )
}

export default Book
