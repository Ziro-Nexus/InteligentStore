export default function LogPage() {
    const tickets = [
        {
            label: "Email: ",
            type: "email",
            name: "email"
        },
        {
            label: "Password:",
            type: "password",
            name: "password"
        }
    ]
  return (
    <form
      action=""
      id="formOne"
      method="get"
      className="formContainer bg-bl"
    >
         {
            tickets.map(({label, type, name})=>(
                <>
                    <labe className="lb">{label}</labe>
                    <br/>
                    <input type={type} name={name} id={name} className="txt " />
                </>
            ))
        }
      
      <button id="submit" className="btn bg-rd" onclick="validate(SubmitEvent)">
        Get In
      </button>
    </form>
  );
}
