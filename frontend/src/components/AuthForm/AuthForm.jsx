import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import cn from "classnames";
import styles from "../AuthForm/AuthForm.module.scss";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice"; // Импортируем экшен loginUser
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import routes from "../../routes/routes.js";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify"; // Импортируем toast

const loginSchema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});

const AuthModal = ({ showModal, handleClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log("Отправка данных для авторизации:", values); // Логируем данные
      const result = await dispatch(
        login({ email: values.email, password: values.password }),
      );

      console.log("Результат авторизации:", result); // Логируем результат

      if (result.type === "auth/loginUser/fulfilled") {
        console.log("Успешный вход!");
        navigate(routes.avatarCreation);
        handleClose();
      } else {
        console.log("Ошибка входа");
        toast.error(t("errors.authError")),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          };
      }
    } catch (e) {
      console.error("Ошибка при авторизации:", e);
      toast.error(
        "Ошибка авторизации: " + (e.response?.data?.message || e.message),
      );
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      aria-labelledby="modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("auth-form.modal-title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles["form-container"]}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form noValidate>
                {/* Поле email */}
                <div className="form-floating mb-3">
                  <Field
                    name="email"
                    autoComplete="email"
                    placeholder="Ваш email"
                    id="email"
                    className={cn("form-control", styles["input-email"], {
                      [styles["input-error"]]: errors.email && touched.email,
                      "is-invalid": errors.email && touched.email,
                    })}
                    style={{ backgroundImage: "none" }}
                  />
                  <label htmlFor="email">{t("auth-form.label-email")}</label>
                  {/* Ошибка для поля email */}
                  {errors.email && touched.email && (
                    <div className="invalid-tooltip" style={{ top: "75%" }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Поле password */}
                <div className="form-floating mb-3">
                  <Field
                    name="password"
                    autoComplete="password"
                    placeholder="Ваш password"
                    id="password"
                    className={cn("form-control", styles["input-password"], {
                      [styles["input-error"]]:
                        errors.password && touched.password,
                      "is-invalid": errors.password && touched.password,
                    })}
                    style={{ backgroundImage: "none" }}
                  />
                  <label htmlFor="password">
                    {t("auth-form.label-password")}
                  </label>
                  {errors.password && touched.password && (
                    <div className="invalid-tooltip" style={{ top: "75%" }}>
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Кнопка входа */}
                <button
                  className={styles["submit"]}
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("auth-form.button-signing-up")
                    : t("auth-form.button-sign-up")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
