import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ExtendedNote } from "../types/note";
import dayjs from "dayjs";

interface FormValues {
  title: string;
  content: string;
}

const WriteNoteSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  content: Yup.string(),
});

interface EditorProps {
  onSave: (title: string, content: string) => void;
  onUpdate: (note: ExtendedNote, title: string, content: string) => void;
  note?: ExtendedNote;
}

const Editor: React.FC<EditorProps> = ({ onSave, onUpdate, note }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note?.noteId) {
      setTitle(note.data.title);
      setContent(note.data.content);
    }
  }, [note]);

  const initialValues: FormValues = {
    title,
    content,
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={WriteNoteSchema}
      onSubmit={({ title, content }, actions) => {
        if (note?.noteId) {
          onUpdate(note, title, content);
        } else {
          onSave(title, content);
        }
        actions.setSubmitting(false);
      }}
    >
      {({ errors }) => (
        <Form className="w-full h-full flex flex-col justify-start items-start rounded-lg bg-neutral-800">
          <div className="w-full p-6 flex justify-between items-center border-b border-neutral-600">
            <Field
              className={`px-3 py-2 font-bold rounded-lg bg-neutral-900 text-neutral-300 ${
                errors.title && "border border-red-500"
              }`}
              id="title"
              name="title"
              placeholder="Title"
            />
            {note?.data && (
              <p className="text-sm font-bold text-neutral-500">
                Last modified {dayjs(note.data.updatedAt).fromNow()}
              </p>
            )}
          </div>

          <div className="w-full h-full p-6 flex flex-col justify-start items-center">
            <Field
              className={`h-full w-full px-3 py-2 font-bold rounded-lg bg-neutral-900 text-neutral-300 ${
                errors.content && "border border-red-500"
              }`}
              id="content"
              name="content"
              as="textarea"
              placeholder="Content"
            />
            <div className="w-full pt-2 flex justify-between items-center">
              <p className="text-sm font-bold text-neutral-500">
                {note?.data &&
                  `Note created ${dayjs(note.data.createdAt).fromNow()}`}
              </p>
              <button
                className="px-3 py-2 mt-4 font-bold text-neutral-300 rounded-lg bg-neutral-900"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Editor;
