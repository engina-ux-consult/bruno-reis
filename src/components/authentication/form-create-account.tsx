import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import * as Yup from "yup";
import { useAuth } from "../../hooks/use-auth";
import { messageErrorAuth } from "../../utils/valid";

export const FormCreateAccount: FC = (props) => {
  const router = useRouter();
  const { createUserEmail } = useAuth();

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Informe um email valido!")
        .max(255)
        .required("Email é obrigatorio"),
      name: Yup.string().max(255).required("Nome é obrigatorio"),
      password: Yup.string()
        .min(8, "Senha deve ter no mínimo 8 caracteres")
        .max(255)
        .required("Senha é obrigatorio"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await createUserEmail({
          email: values.email,
          name: values.name,
          password: values.password,
        });
        router.push("/dashboard");
      } catch (error: any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: messageErrorAuth(error?.code) });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        label="Nome completo"
        margin="none"
        name="name"
        type="text"
        sx={{ mt: "52px" }}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        error={Boolean(formik.touched.name && formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        autoFocus
        required
        fullWidth
        label="E-mail"
        margin="none"
        name="email"
        type="email"
        sx={{ mt: "52px" }}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={Boolean(formik.touched.email && formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <FormControl
        sx={{ mt: "52px" }}
        variant="outlined"
        required
        fullWidth
        error={Boolean(formik.touched.password && formik.errors.password)}
      >
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <OutlinedInput
          required
          fullWidth
          label="Senha"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {Boolean(formik.touched.password && formik.errors.password) ? (
          <FormHelperText sx={{ marginLeft: 0 }}>
            {formik.touched.password && formik.errors.password}
          </FormHelperText>
        ) : (
          <FormHelperText sx={{ marginLeft: 0 }}>
            Ao menos 8 caracteres
          </FormHelperText>
        )}
      </FormControl>
      <Typography sx={{ mt: "16px" }}>
        Esqueceu a senha?{" "}
        <Link
          href="/recovery-password"
          underline="none"
          fontWeight="bold"
          color="#382B57"
        >
          Acesse aqui
        </Link>
      </Typography>

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
          Entrar
        </LoadingButton>
      </Box>
    </form>
  );
};
