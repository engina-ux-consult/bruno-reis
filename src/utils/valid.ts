export const messageErrorAuth = (code: string) => {
  switch (code) {
    case "auth/invalid-email":
      return "Email invalido.";
    case "auth/user-disabled":
      return "Conta desativada.";
    case "auth/user-not-found":
      return "Conta não cadastrado";
    case "auth/wrong-password":
      return "Dados invalidos";
    case "auth/email-already-in-use":
      return "Email já cadastrado, faça login";
    case "auth/too-many-requests":
      return "O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login com falha. Você pode restaurá-lo imediatamente redefinindo sua senha ou pode tentar novamente mais tarde";
    default:
      return "Ocorreu um erro, tente novamente";
  }
};
