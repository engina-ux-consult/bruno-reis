import { LoadingButton } from "@mui/lab";
import { Box, FormHelperText, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FC, useState } from "react";
import * as Yup from "yup";
import { useAuth } from "../../hooks/use-auth";
import { messageErrorAuth } from "../../utils/valid";

export const FormRecoveryPassword: FC = (props) => {
  const { resetPassword } = useAuth();
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Informe um email valido!")
        .max(255)
        .required("Email é obrigatorio"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await resetPassword(values.email);
        setShowMessage(true);
      } catch (error: any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: messageErrorAuth(error?.code) });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      {...props}
    >
      <TextField
        autoFocus
        required
        fullWidth
        label="E-mail"
        margin="normal"
        name="email"
        type="email"
        sx={{ mt: "40px" }}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={Boolean(formik.touched.email && formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>{formik.errors.submit}</FormHelperText>
        </Box>
      )}

      <Box sx={{ mt: "40px" }}>
        <LoadingButton
          fullWidth
          disabled={!formik.dirty}
          loading={formik.isSubmitting}
          type="submit"
          variant="contained"
          size="large"
        >
          Enviar código
        </LoadingButton>
      </Box>
      {showMessage && (
        <Typography variant="body1" mt="32px">
          Foi enviado um e-mail para você com as instruções de recuperação de
          senha, se não encontrar o e-mail na sua caixa de entrada, verifique o
          spam
        </Typography>
      )}
    </form>
  );
};
