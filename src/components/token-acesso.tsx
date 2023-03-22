import { LoadingButton } from "@mui/lab";
import { Box, FormHelperText, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

const tokenValid = "ALUNOS2023";

export const TokenAcesso: FC = () => {
  const [token, setToken] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const xToken = window.localStorage.getItem("brunoreis_token");
    if (xToken && xToken === tokenValid) {
      setToken(xToken);
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleSubmit = () => {
    if (token !== tokenValid) {
      setIsError(true);
      return;
    }
    window.localStorage.setItem("brunoreis_token", token);

    setToken(token);
    setShowModal(false);
  };

  if (!showModal) {
    return <></>;
  }
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(34, 34, 34, 0.5)",
        top: 0,
        left: 0,
        zIndex: 99,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          padding: "24px",
          width: "544px",
          background: "#FFFFFF",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: "16px" }}>
          Token de acesso
        </Typography>
        <Typography variant="body1">
          Para usar a plataforma, você precisará fornecer o token de acesso
          enviado para você. Este token é usado para permitir que você acesse
          nossos conteúdos.
        </Typography>
        <Typography
          variant="body1"
          fontWeight={700}
          sx={{
            mt: "40px",
            mb: "24px",
          }}
        >
          Insira o token de acesso abaixo:
        </Typography>
        <Box>
          <TextField
            fullWidth
            label="Token de acesso"
            variant="outlined"
            value={token}
            onChange={(event) => {
              setToken(event.target.value);
            }}
            sx={{
              "> div > fieldset": {
                borderColor: "#222",
              },
              "> label": {
                color: "#222",
              },
            }}
          />
          {isError && (
            <FormHelperText id="my-helper-text" error>
              Token inválido
            </FormHelperText>
          )}
        </Box>
        <LoadingButton
          fullWidth
          sx={{ marginTop: "40px" }}
          disabled={!token}
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          size="large"
        >
          Acessar plataforma
        </LoadingButton>
      </Box>
    </Box>
  );
};
