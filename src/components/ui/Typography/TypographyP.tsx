function TypographyP({P}: {P: string}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {P}
    </p>
  )
}

export default TypographyP