import { TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
	secName: Yup.string()
		.required("SecName must be filled")
		.min(3, "secname length must be greater than 2")
		.max(5, "secname length must be less than 5")
		.matches(/^[a-zA-Z]+$/, "do not use aanything except numbers and letters"),
	userName: Yup.string().required("userName must be filled"),
	sex: Yup.string().required("sex is must field"),
	address: Yup.object({ mobile: Yup.number().required("must be numbers") }),
});

const initialValues = {
	userName: "",
	secName: "",
	address: {
		mobile: "",
		home: "",
	},
	quantity: [],
	sex: "",
	color: "",
};

const AppFormik = () => {
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(value, a) => {
					console.log(a);
					console.log(value);
					a.resetForm({ values: initialValues });
				}}
			>
				{({
					values,
					errors,
					handleBlur,
					handleChange,
					touched,
					isSubmitting,
				}) => {
					return (
						<Form className="flex flex-col gap-2">
							<div>
								<Field id="name" name="userName" />
								<label htmlFor="name"> name</label>
								<span className="text-pink">
									<ErrorMessage name="userName" />
								</span>
							</div>
							<div>
								<Field name="secName" />
								<label htmlFor="sec"> secName</label>
								<span id="sec" className="text-pink">
									<ErrorMessage name="secName" />
								</span>
							</div>
							<div>
								<Field name="address.mobile" />
								<label htmlFor="mobile"> mobile</label>
								<span id="mobile" className="text-pink">
									<ErrorMessage name="address.mobile" />
								</span>
							</div>
							<div>
								<Field id="home" name="address.home" />
								<label htmlFor="home"> home</label>
								<span className="text-pink">
									<ErrorMessage name="address.home" />
								</span>
							</div>
							<div>
								<div>
									<Field type="checkbox" name="quantity" value="one" id="one" />
									<label htmlFor="one">one</label>
								</div>
								<div>
									<Field type="checkbox" name="quantity" value="two" id="two" />
									<label htmlFor="two">two</label>
								</div>
								<div>
									<Field
										type="checkbox"
										name="quantity"
										value="three"
										id="three"
									/>
									<label htmlFor="three">three</label>
								</div>
							</div>
							<div>
								<div>
									<Field id="male" type="radio" name="sex" value="male" />
									<label htmlFor="male">male</label>
								</div>
								<div>
									<Field id="fem" type="radio" name="sex" value="female" />
									<label htmlFor="fem">female</label>
								</div>
								<div>
									<Field
										id="ucx"
										type="radio"
										name="sex"
										value="ucxoplaneteli"
									/>
									<label htmlFor="ucx">female</label>
								</div>
								<ErrorMessage name="sex" />
							</div>
							<div>
								<Field name="color" component="select">
									<option value="red">Red</option>
									<option value="green">Green</option>
									<option value="blue">Blue</option>
								</Field>
							</div>

							<div>
								<TextField
									name="secName"
									label="Last name"
									value={values.secName}
									onChange={handleChange}
									onBlur={handleBlur}
									error={touched.secName && Boolean(errors.secName)}
									helperText={touched.secName && errors.secName}
								/>
							</div>
							<button disabled={isSubmitting}>submit</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default AppFormik;
