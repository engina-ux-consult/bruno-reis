function ST(){
  const css = `
  @media only screen and (max-width: 600px) {
    [class*="form"] {
      min-width: 100%;
      margin-bottom: 1.5rem;
      border-radius: 0.25rem;
    }
    
    #topo{
       margin-top: 64px;
    }

    .content{
      padding: 1rem;
    }

    .h{
      height: 1.5rem;
    }

    .inv{
      display: none;
    }

    .mob{
      display: inline !important;
    }

    .dashboard{
      background: linear-gradient(90deg, #382B57 0%, #3D237C 100%);
    }

    html, body {
      height: 100%;
    }
    
    body {
      
      padding: 0;
      margin: 0 auto !important;
      
    }
  }
  @media only screen and (min-width: 601px){
    #pl{
      padding-left: 17.063rem;
      padding-right: 1rem;
    }
    .h{
      height: 2.5rem;
    }
    .mob{
      display: none;
    }
    .col{
      align-items: center;
      display: flex;
      flex-direction: column;
      
      justify-content: center;
      
    }
    .dashboard{
      background: linear-gradient(90deg, #382B57 0%, #3D237C 100%);
    }
    .bg{
      width: 100%;
      height: 100vh; 
      object-fit: cover;
      display: flex;
    }
  @font-face {
      src: url('https://fonts.googleapis.com/css?family=Open+Sans');
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
  } 
    * {
        font-family: 'Open Sans', sans-serif;
    }
    .Link{
      color: #382B57;
      font-weight: bold;
    }
    .Link:visited {
        color: #382B57;
    }
    .Button {
        color: #FFFFFF;
        background-color: #382B57;
        border-radius: 0.25rem;
        text-transform: none;
    }
    .Button:hover{
        background-color: #584389;
  }
  .Button:focus{
        background-color: #7C65B3;
  }

  a{
    color: #A09E9E;
    text-decoration:none;
  }
  a:active{
    color: #382B57;
  }

  .indice{
    float: left;
  }

  img{
    pointer-events: none;
  }

  .subT{
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }

  .text{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #535353;
  }
}
        `;
        return(
          <style>
      {css}
    </style>
        );
        
};

export default ST