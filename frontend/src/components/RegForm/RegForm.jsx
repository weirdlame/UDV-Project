import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import cn from "classnames";
import styles from "../RegForm/RegForm.module.scss";
import { useDispatch } from "react-redux";
import { registrationUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routes from "../../routes/routes.js";
import { toast } from "react-toastify"; // Импортируем toast

// Схема валидации через yup
const registrationSchema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательное поле"),
});

const RegistrationModal = ({ showModal, handleClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(
        registrationUser({ email: values.email, password: values.password }),
      ).unwrap();

      navigate(routes.avatarCreation);
      handleClose();
    } catch (error) {
      toast.error(t("errors.regError"));

      if (error.request) {
        toast.error("📡 Нет ответа от сервера. Проверьте интернет-соединение.");
      }
    } finally {
      setSubmitting(false);
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
        <Modal.Title id="modal-title">{t("reg-form.modal-title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form noValidate>
              {/* Поле email */}
              <div className="form-floating mb-3">
                <Field
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ваш email"
                  id="email"
                  className={cn("form-control", styles["input-email"], {
                    [styles["input-error"]]: errors.email && touched.email,
                    "is-invalid": errors.email && touched.email,
                  })}
                  aria-describedby="emailError"
                  style={{ backgroundImage: "none" }}
                />
                <label htmlFor="email">{t("reg-form.label-email")}</label>
                {errors.email && touched.email && (
                  <div
                    id="emailError"
                    className="invalid-tooltip"
                    style={{ top: "75%" }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Поле password */}
              <div className="form-floating mb-3">
                <Field
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Ваш пароль"
                  id="password"
                  className={cn("form-control", styles["input-password"], {
                    [styles["input-error"]]:
                      errors.password && touched.password,
                    "is-invalid": errors.password && touched.password,
                  })}
                  aria-describedby="passwordError"
                  style={{ backgroundImage: "none" }}
                />
                <label htmlFor="password">{t("reg-form.label-password")}</label>
                {errors.password && touched.password && (
                  <div
                    id="passwordError"
                    className="invalid-tooltip"
                    style={{ top: "75%" }}
                  >
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Поле confirmPassword */}
              <div className="form-floating mb-3">
                <Field
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Подтвердите пароль"
                  id="confirmPassword"
                  className={cn(
                    "form-control",
                    styles["input-confirmPassword"],
                    {
                      [styles["input-error"]]:
                        errors.confirmPassword && touched.confirmPassword,
                      "is-invalid":
                        errors.confirmPassword && touched.confirmPassword,
                    },
                  )}
                  aria-describedby="confirmPasswordError"
                  style={{ backgroundImage: "none" }}
                />
                <label htmlFor="confirmPassword">
                  {t("reg-form.label-confirm-password")}
                </label>
                {errors.confirmPassword && touched.confirmPassword && (
                  <div
                    id="confirmPasswordError"
                    className="invalid-tooltip"
                    style={{ top: "75%" }}
                  >
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Кнопка отправки */}
              <button
                className={styles["submit"]}
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("reg-form.button-loging-in")
                  : t("reg-form.button-log-in")}
              </button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default RegistrationModal;
