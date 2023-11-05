import { Formik, Field, Form } from 'formik';

export const AddForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(value, actions) => {
        onSubmit(value);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" />

        <label htmlFor="number">Number</label>
        <Field type="tel" name="number" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
