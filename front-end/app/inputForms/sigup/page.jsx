export default function SigPage() {
    const tickets = [
        {
            label: "Firts Name: ",
            type: "text",
            name: "name"
        },
        {
            label: "Email:",
            type: "email",
            name: "email"
        },
        {
            label: "Password:",
            type: "password",
            name: "password"
        },
        {
            label: "Confirm Password:",
            type: "password",
            name: "password"
        }

    ]
  return (
    <form action="" id="formOne" method="get" className="formContainer bg-rd">
        {
            tickets.map(({label, type, name})=>(
                <>
                    <br/>
                    <labe className="lb">{label}</labe>
                    <br/>
                    <input type={type} name={name} id={name} className="txt " />
                </>
            ))
        }
      <button id="submit" className="btn bg-or txt-bl" onclick="validate(SubmitEvent)">
        Sig up
      </button>
    </form>
  );
}
