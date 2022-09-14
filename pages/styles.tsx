function ST(){
    const css = `

    div {
        font-family: 'Open Sans';
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
          `;
          return(
            <style>
        {css}
      </style>
          );
          
};

export default ST