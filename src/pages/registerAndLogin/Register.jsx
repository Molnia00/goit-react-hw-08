import { Formik, Form, Field } from "formik";
import s from './RegisterAndLogin.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

function Register() {
    const initialValues = {
        password: '',
        name: '',
        email: '',
    };

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (values, options) => {
        console.log(values);
        options.resetForm();
        dispatch(register(values)).unwrap().then(() => navigate('/'))
    };

    

    return (
        <>
            <h2>Register</h2>
        <div className={s.containerRegister}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label className={s.formLabel}>
                        <span>Name:</span>
                        <Field name='name' className={s.formField} />
                    </label>

                    <label className={s.formLabel}>
                        <span>Email:</span>
                        <Field name='email' className={s.formField} />
                    </label>

                    <label className={s.formLabel}>
                        <span>Password:</span>
                        <Field name='password' type='password' className={s.formField} />
                    </label>

                    
                        <button type='submit' className={s.formButton}>Login</button>
                        
                        <p>Do you already have an<Link className={s.linkLogOrRegister} to='/login'> account? </Link></p>
                </Form>
            </Formik>
        </div></>
    );
}

export default Register;