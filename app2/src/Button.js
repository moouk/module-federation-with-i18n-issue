import React from "react";
import i18next from "i18next";

const Button = () => {
	let value = i18next.t('key');	
	return <button>{ value }</button>
}

export default Button;
