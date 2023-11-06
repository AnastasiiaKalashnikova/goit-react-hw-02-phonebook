import { Formik, Field } from 'formik';
import { AddBtn, StyledForm } from './AddForm.styled';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  number: Yup.number().min(7).required(),
});

export const AddForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validation={Schema}
      onSubmit={(value, actions) => {
        onSubmit(value);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Field name="name" />

        <label htmlFor="number">Number</label>
        <Field type="tel" name="number" />

        <AddBtn type="submit">Add Contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
