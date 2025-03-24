import { Formik, Form, Field } from "formik"
import s from './RegisterAndLogin.module.css'
import { Link } from "react-router-dom";

function Login() {
    const initialValues = {
        password: '',
        email:'',
    };

    const handleSubmit = (values, options) => {
        console.log(values)
        options.resetForm()
    }
    return (<>
        <h2>Login</h2>
        <div className={s.containerRegister}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>

                    <label className={s.formLabel}>
                        <span>Email:</span>
                        <Field name='email' className={s.formField} />
                    </label>

                    <label className={s.formLabel}>
                        <span>Password:</span>
                        <Field name='password' type='password' className={s.formField} />
                    </label>

                    <button type='submit' className={s.formButton}>Login</button>
                
                    <p>You do not have an account?<Link className={s.linkLogOrRegister} to='/register'> Make it! </Link></p>
                </Form>

            </Formik>
        </div></>
    );
}

export default Login