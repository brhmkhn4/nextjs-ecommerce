import TypographyH1 from "@/components/ui/Typography/TypographyH1"


function Login() {

  let mainHeading = "This is main heading"
  return (
    <div className="p-5">
      <TypographyH1 H1={mainHeading} />
    </div>
  )
}

export default Login