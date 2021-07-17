import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function MyFormik() {
  const initialValues = {
    top1: "",
  };
  const validationSchema = Yup.object().shape({
    top1: Yup.string().required("Number of tickets is required"),
  });

  return (
    <div>
      <Form>
        <Field name="top1"></Field>
      </Form>
    </div>
  );
}
