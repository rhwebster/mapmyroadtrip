import { useDispatch, useSelector } from 'react-redux';
import {addTrip} from '../../store/trip'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, DatePickerField, RadioField } from '../FormFields'
import PlacesAutoComplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
// import css


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
                    <
                    <label>
                    <Field 
                        type="radio"    
                        name="private" 
                        value={true} 
                    />
                    Private
                    </label>
                    <label>
                    <Field 
                        type="radio" 
                        name="private" 
                        value={false} 
                    />
                    Public
                    </label>
                    <button type="submit">Create Trip</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateTripForm