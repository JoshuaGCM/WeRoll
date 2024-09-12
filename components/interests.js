import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Pressable,
	TouchableOpacity,
	Text,
	SafeAreaView,
	TextInput,
	Touchable,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { RadioButton, List, Checkbox, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from "@react-navigation/native";

const Interest = ({ navigation }) => {
	const svgBook = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="27" viewBox="0 0 37 27" fill="none">
    <path d="M7.46091 0H1.06584C0.47963 0 0 0.488194 0 1.08488V24.9522C0 25.5488 0.47963 26.037 1.06584 26.037H7.46091C8.04712 26.037 8.52675 25.5488 8.52675 24.9522V1.08488C8.52675 0.488194 8.04712 0 7.46091 0ZM6.39506 6.50926H2.13169V4.33951H6.39506V6.50926ZM18.1193 0H11.7243C11.1381 0 10.6584 0.488194 10.6584 1.08488V24.9522C10.6584 25.5488 11.1381 26.037 11.7243 26.037H18.1193C18.7056 26.037 19.1852 25.5488 19.1852 24.9522V1.08488C19.1852 0.488194 18.7056 0 18.1193 0ZM17.0535 6.50926H12.7901V4.33951H17.0535V6.50926Z" fill="white"/>
    <path d="M25.6202 1.48593L19.7836 4.43858C19.5265 4.56977 19.3315 4.79759 19.2409 5.07243C19.1503 5.34729 19.1715 5.64693 19.2999 5.90615L29.1038 25.4374C29.2345 25.6954 29.4615 25.8913 29.7352 25.9822C30.009 26.0731 30.3075 26.0518 30.5657 25.9229L36.4023 22.9703C36.6594 22.8391 36.8544 22.6113 36.945 22.3364C37.0356 22.0616 37.0144 21.7619 36.886 21.5027L27.0821 1.97147C26.9514 1.7134 26.7244 1.5176 26.4507 1.42666C26.1769 1.33573 25.8784 1.35703 25.6202 1.48593Z" fill="white"/>
    <path d="M31.5181 24.6672C31.5181 25.0307 31.3737 25.3793 31.1167 25.6362C30.8597 25.8932 30.5112 26.0376 30.1477 26.0376C29.7843 26.0376 29.4357 25.8932 29.1787 25.6362C28.9217 25.3793 28.7773 25.0307 28.7773 24.6672C28.7773 24.3038 28.9217 23.9552 29.1787 23.6982C29.4357 23.4413 29.7843 23.2969 30.1477 23.2969C30.5112 23.2969 30.8597 23.4413 31.1167 23.6982C31.3737 23.9552 31.5181 24.3038 31.5181 24.6672Z" fill="white"/>
  </svg>`;
	const svgArt = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M24.1667 15C23.5036 15 22.8677 14.7366 22.3989 14.2678C21.9301 13.7989 21.6667 13.163 21.6667 12.5C21.6667 11.837 21.9301 11.2011 22.3989 10.7322C22.8677 10.2634 23.5036 10 24.1667 10C24.8297 10 25.4656 10.2634 25.9344 10.7322C26.4033 11.2011 26.6667 11.837 26.6667 12.5C26.6667 13.163 26.4033 13.7989 25.9344 14.2678C25.4656 14.7366 24.8297 15 24.1667 15ZM19.1667 8.33333C18.5036 8.33333 17.8677 8.06994 17.3989 7.6011C16.9301 7.13226 16.6667 6.49637 16.6667 5.83333C16.6667 5.17029 16.9301 4.53441 17.3989 4.06557C17.8677 3.59672 18.5036 3.33333 19.1667 3.33333C19.8297 3.33333 20.4656 3.59672 20.9344 4.06557C21.4033 4.53441 21.6667 5.17029 21.6667 5.83333C21.6667 6.49637 21.4033 7.13226 20.9344 7.6011C20.4656 8.06994 19.8297 8.33333 19.1667 8.33333ZM10.8333 8.33333C10.1703 8.33333 9.53441 8.06994 9.06557 7.6011C8.59672 7.13226 8.33333 6.49637 8.33333 5.83333C8.33333 5.17029 8.59672 4.53441 9.06557 4.06557C9.53441 3.59672 10.1703 3.33333 10.8333 3.33333C11.4964 3.33333 12.1323 3.59672 12.6011 4.06557C13.0699 4.53441 13.3333 5.17029 13.3333 5.83333C13.3333 6.49637 13.0699 7.13226 12.6011 7.6011C12.1323 8.06994 11.4964 8.33333 10.8333 8.33333ZM5.83333 15C5.17029 15 4.53441 14.7366 4.06557 14.2678C3.59672 13.7989 3.33333 13.163 3.33333 12.5C3.33333 11.837 3.59672 11.2011 4.06557 10.7322C4.53441 10.2634 5.17029 10 5.83333 10C6.49637 10 7.13226 10.2634 7.6011 10.7322C8.06994 11.2011 8.33333 11.837 8.33333 12.5C8.33333 13.163 8.06994 13.7989 7.6011 14.2678C7.13226 14.7366 6.49637 15 5.83333 15ZM15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C15.663 30 16.2989 29.7366 16.7678 29.2678C17.2366 28.7989 17.5 28.163 17.5 27.5C17.5 26.85 17.25 26.2667 16.85 25.8333C16.4667 25.3833 16.2167 24.8 16.2167 24.1667C16.2167 23.5036 16.4801 22.8677 16.9489 22.3989C17.4177 21.9301 18.0536 21.6667 18.7167 21.6667H21.6667C23.8768 21.6667 25.9964 20.7887 27.5592 19.2259C29.122 17.6631 30 15.5435 30 13.3333C30 5.96667 23.2833 0 15 0Z" fill="white"/>
  </svg>`;
	const svgSport = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
	<path d="M0.0155118 18.9735C-0.104617 22.6065 0.496028 25.4889 1.02159 26.0143C1.54716 26.5398 4.44527 27.1553 8.06416 27.0202L0.0155118 18.9735ZM15.1217 0.448288C11.623 1.07881 7.92901 2.45994 5.18106 5.22222C2.43311 7.98449 1.03661 11.6625 0.405931 15.1604L11.8632 26.6148C15.377 25.9993 19.056 24.6032 21.8039 21.8409C24.5519 19.0786 25.9484 15.4006 26.5791 11.9027L15.1217 0.448288ZM10.3466 18.7934L8.24435 16.6917L16.6534 8.28474L18.7556 10.3865L10.3466 18.7934ZM26.9845 8.10459C27.1046 4.4716 26.504 1.58923 25.9784 1.06379C25.4528 0.538362 22.5547 -0.0771442 18.9358 0.057967L26.9845 8.10459Z" fill="white"/>
  </svg>`;
	const svgNature = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="33" viewBox="0 0 26 33" fill="none">
    <path d="M1.625 32.0391V28.8391H11.375V22.4391H8.125C5.87708 22.4391 3.96067 21.6588 2.37575 20.0983C0.790834 18.5377 -0.00108222 16.6513 1.10997e-06 14.4391C1.10997e-06 12.8391 0.446876 11.3655 1.34063 10.0183C2.23438 8.67107 3.43958 7.69133 4.95625 7.07906C5.2 5.07906 6.08725 3.40546 7.618 2.05826C9.14875 0.711064 10.9428 0.0379971 13 0.0390638C15.0583 0.0390638 16.8529 0.712664 18.3836 2.05986C19.9144 3.40706 20.8011 5.08013 21.0438 7.07906C22.5604 7.6924 23.7656 8.67266 24.6594 10.0199C25.5531 11.3671 26 12.8401 26 14.4391C26 16.6524 25.2075 18.5393 23.6226 20.0999C22.0377 21.6604 20.1218 22.4401 17.875 22.4391H14.625V28.8391H24.375V32.0391H1.625Z" fill="white"/>
  </svg>`;
	const svgTech = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M30.0769 13.1562H3.42308C2.08485 13.1562 1 14.2411 1 15.5793V30.1178C1 31.456 2.08485 32.5409 3.42308 32.5409H30.0769C31.4152 32.5409 32.5 31.456 32.5 30.1178V15.5793C32.5 14.2411 31.4152 13.1562 30.0769 13.1562Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.75 13.1544V1.03906" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.0194 26.4802C26.0267 26.4802 27.654 24.8529 27.654 22.8456C27.654 20.8382 26.0267 19.2109 24.0194 19.2109C22.012 19.2109 20.3848 20.8382 20.3848 22.8456C20.3848 24.8529 22.012 26.4802 24.0194 26.4802Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.48032 26.4802C11.4877 26.4802 13.1149 24.8529 13.1149 22.8456C13.1149 20.8382 11.4877 19.2109 9.48032 19.2109C7.47298 19.2109 5.8457 20.8382 5.8457 22.8456C5.8457 24.8529 7.47298 26.4802 9.48032 26.4802Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
	const svgHang = `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
    <path d="M21.1364 8.61049C23.4755 8.61049 25.3495 6.69621 25.3495 4.32478C25.3495 1.95335 23.4755 0.0390625 21.1364 0.0390625C18.7973 0.0390625 16.9091 1.95335 16.9091 4.32478C16.9091 6.69621 18.7973 8.61049 21.1364 8.61049ZM9.86364 8.61049C12.2027 8.61049 14.0768 6.69621 14.0768 4.32478C14.0768 1.95335 12.2027 0.0390625 9.86364 0.0390625C7.52455 0.0390625 5.63636 1.95335 5.63636 4.32478C5.63636 6.69621 7.52455 8.61049 9.86364 8.61049ZM9.86364 11.4676C6.58045 11.4676 0 13.1391 0 16.4676V20.0391H19.7273V16.4676C19.7273 13.1391 13.1468 11.4676 9.86364 11.4676ZM21.1364 11.4676C20.7277 11.4676 20.2627 11.4962 19.7695 11.5391C21.4041 12.7391 22.5455 14.3533 22.5455 16.4676V20.0391H31V16.4676C31 13.1391 24.4195 11.4676 21.1364 11.4676Z" fill="white"/>
  </svg>`;
	const svgOther = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="12" viewBox="0 0 48 12" fill="none">
  <circle cx="5.53846" cy="5.57752" r="5.53846" fill="white"/>
  <circle cx="42.4623" cy="5.57752" r="5.53846" fill="white"/>
  <circle cx="23.9994" cy="5.57752" r="5.53846" fill="white"/>
</svg>`;

	const options = [
		{ id: "option1", label: "Books", svgCode: svgBook },
		{ id: "option2", label: "Art", svgCode: svgArt },
		{ id: "option3", label: "Sports", svgCode: svgSport },
		{ id: "option4", label: "Nature", svgCode: svgNature },
		{ id: "option5", label: "Tech", svgCode: svgTech },
		{ id: "option6", label: "Hang-Outs", svgCode: svgHang },
		{ id: "option7", label: "Other", svgCode: svgOther }, // Add more options here as needed
	];
	const [selectedCheckboxes, setSelectedCheckboxes] = useState({}); // Use an object to track multiple checkboxes

	const handleCheckboxToggle = (checkboxId) => {
		setSelectedCheckboxes((prev) => ({
			...prev,
			[checkboxId]: !prev[checkboxId], // Toggle the checkbox state
		}));
	};

	const submitButton = () => {
		navigation.navigate("Homepage");
	};

	const [buttonColor, setButtonColor] = useState("#72A4EE"); // Default color

	const handleButtonPress = () => {
		setButtonColor("#0029FF"); // New color when the button is clicked
	};

	return (
		<View style={{ backgroundColor: "white", height: "100%" }}>
			<Text style={styles.Header1}> Select Your Intrests</Text>
			<View style={styles.form}>
				{options.map((option) => (
					<TouchableOpacity
						key={option.id}
						style={{ ...styles.button1, backgroundColor: buttonColor }}
						onPress={() => {
							handleButtonPress;
							// handleCheckboxToggle(option.id);
						}}>
						<SvgXml xml={option.svgCode} width="40%" height="40%" />
						<Text style={styles.text}>{option.label}</Text>

						{/* <Checkbox
							status={selectedCheckboxes[option.id] ? "checked" : "unchecked"}
							style={{ width: 1000 }}
						/> */}
					</TouchableOpacity>
				))}

				<TouchableOpacity style={styles.nextButton} onPress={submitButton}>
					<Text style={styles.submit}>Submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Header1: {
		fontSize: 30,
		marginHorizontal: 65,
		marginTop: 30,
	},
	button1: {
		width: 170,
		height: 55,
		margin: 12,
		marginBottom: 30,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	nextButton: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		backgroundColor: "#3570F9",
		width: 300,
		height: 45,
		marginLeft: 50,
		marginTop: 30,
		borderRadius: 12,
	},
	form: {
		marginTop: 20,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	text: {
		color: "white",
		fontSize: 20,
	},
	submit: {
		textAlign: "center",
		color: "white",
		fontSize: 20,
	},
});

export default Interest;
