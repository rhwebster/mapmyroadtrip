import { useDispatch, useSelector } from 'react-redux';
import {addTrip} from '../../store/trips'
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import PlacesAutoComplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
// import css

const TextField = ({ label, ...props }) => {
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

const DatePickerField = ({ label, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
         />
        </>
    );
};

const PrivacyPickerField = ({ label, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>

        </>
    )

}

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
                    start_lon: '',
                    end_lat: '',
                    end_lon: '',
                    private: true,
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(150, 'Must be 150 characters or less')
                        .required('Required'),
                    start_date: Yup.date()
                        .required('Required'),
                    private: Yup.boolean()
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    dispatch(addTrip(values))
                }}

            >
                <Form>
                    <TextField
                        label="Trip Title"
                        name="title"
                        type="text"
                    /><br/>
                    <DatePickerField
                        label="Start Date of Trip"
                        name="start_date"
                    />
                    <DatePickerField
                        label="End Date of Trip"
                        name="end_date"
                    />



                </Form>



            </Formik>
        </div>
    )

};

export default CreateTripForm