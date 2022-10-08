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

export const FormLogin: FC = (props) => {
  const router = useRouter();
  const { signInEmail } = useAuth();

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Informe um email valido!")
        .max(255)
        .required("Email é obrigatorio"),
      password: Yup.string().max(255).required("Senha é obrigatorio"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await signInEmail(values.email, values.password);
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
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        autoFocus
        required
        fullWidth
        label="E-mail"
        margin="normal"
        name="email"
        type="email"
        sx={{ backgroundColor: "#fff" }}
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
        {Boolean(formik.touched.password && formik.errors.password) && (
          <FormHelperText>
            {formik.touched.password && formik.errors.password}
          </FormHelperText>
        )}
      </FormControl>
      <Typography sx={{ mt: "16px" }}>
        Esqueceu a senha?{" "}
        <Link
          href="/redefinirsenha"
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
