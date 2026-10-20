
import * as zod from "zod"

export let Loginschema = zod.object({

  email: zod.string().nonempty('Name Req').email('Invalid Email'),

  password: zod.string().nonempty('Password Req').regex(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
    "Password must contain uppercase, lowercase, number and special character"
  ),

})
