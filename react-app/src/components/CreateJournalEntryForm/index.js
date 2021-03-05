import { useDispatch, useSelector } from "react-redux";
import { addEntry } from "../../store/entry";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { setPic } from "../../store/session";
import { TextField, TextAreaField, SelectField } from "../FormFields";

const CreateJournalEntryForm = () => {
  const dispatch = useDispatch();
  const [profPic, setProfPic] = useState("");
  const userId = useSelector((state) => state.session.user.id);

  const updateProfPic = (e) => {
    const file = e.target.files[0];
    setProfPic(file);
  };

  return (
    <div className="create-trip-form">
      <h1>Create New Journal Entry</h1>
      <Formik
        initialValues={{
          title: "",
          trip_id: "",
          image: "",
          entry: "",
          lat: "",
          lon: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(150, "Must be 150 characters or less")
            .required("Required"),
          trip_id: Yup.date().required("Required"),
          entry: Yup.boolean().required("Required"),
        })}
        onSubmit={(values) => {
          dispatch(addEntry(values));
          //   dispatch(setPic(profPic));
        }}
      >
        <Form encType="multipart/form-data">
          <TextField label="Entry Title" name="title" />
          <SelectField label="Trip" name="trip_id">
            <option value="">Select a trip</option>
            {/* ****ITERATE OVER userId.trips**** */}
            {/* ****DO WE WANT TO PUT TRIP ON SESSION AND HAVE MAP VIEW LOAD TO PLACE PIN? THEN WE DON'T NEED THIS*** */}
          </SelectField>
          {/* ****IMAGE UPLOAD HERE**** */}
          <TextAreaField label="Entry Text" name="entry" />
          <button type="submit">Create Entry</button>
          <div>
            <form onSubmit={onSubmit} encType="multipart/form-data">
              <label htmlFor="user_file">Upload Your File</label>
              <br></br>
              <input onChange={updateProfPic} type="file" name="user_file" />
              <br></br>
              <button type="submit">Upload</button>
            </form>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTripForm;
