import { useDispatch, useSelector } from 'react-redux';
import {addTrip} from '../../store/trips'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
// import css

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
        </>
    );
};

const CreateTripForm = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);

    return (
        <div className="create-trip-form">
            <h1>Create New Trip</h1>
            <Formik
                initialValues={{
                    userId: userId,
                    title: '',
                    start_date: '',
                    end_date: '',
                    start_lat: '',
                    end_lat: '',
                    end_lon: '',
                    private: true,
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(150, 'Must be 150 characters or less')
                        .required('Required'),
                    start_date: Yup
                })}

            >



            </Formik>
        </div>
    )

};

export default CreateTripForm