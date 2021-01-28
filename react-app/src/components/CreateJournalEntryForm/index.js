import { useDispatch, useSelector } from 'react-redux';
import {addEntry} from '../../store/entry'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, TextAreaField, SelectField } from '../FormFields'
// import css

const CreateJournalEntryForm = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);

    return (
        <div className="create-trip-form">
            <h1>Create New Journal Entry</h1>
            <Formik
                initialValues={{
                    title: '',
                    trip_id: '',
                    image: '',
                    entry: '',
                    lat: '',
                    lon: '',
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(150, 'Must be 150 characters or less')
                        .required('Required'),
                    trip_id: Yup.date()
                        .required('Required'),
                    entry: Yup.boolean()
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    dispatch(addEntry(values))
                }}

            >
                <Form>
                    <TextField
                        label="Entry Title"
                        name="title"
                    />
                    <SelectField label="Trip" name="trip_id">
                        <option value="">Select a trip</option>
                        {/* ****ITERATE OVER userId.trips**** */}
                        {/* ****DO WE WANT TO PUT TRIP ON SESSION AND HAVE MAP VIEW LOAD TO PLACE PIN? THEN WE DON'T NEED THIS*** */}
                    </SelectField>
                    {/* ****IMAGE UPLOAD HERE**** */}
                    <TextAreaField
                        label="Entry Text"
                        name="entry"
                    />    
                    <button type="submit">Create Entry</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateTripForm