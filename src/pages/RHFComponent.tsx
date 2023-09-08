import { TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export default () => {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			select: "",
		},
	});

	const onSubmit = (data: any) => {
		console.log(errors);
		console.log(data);
	};

	return (
		<div className="h-[calc(100vh-95px)] w-screen flex justify-center items-center">
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				{/* <input defaultValue="test" {...register("example")} /> */}
				{/* <TextField label="test" {...register("example")} /> */}

				{/* include validation with required or other standard HTML validation rules */}
				{/* <input {...register("exampleRequired", { required: true })} /> */}
				{/* errors will return when field validation fails  */}
				{/* {errors.exampleRequired && (
					<span className="text-pink">This field is required</span>
				)} */}

				{/* <select {...register("gender")}>
					<option value="female">female</option>
					<option value="male">male</option>
					<option value="other">other</option>
				</select> */}

				<Controller
					name="firstName"
					control={control}
					render={({ field }) => {
						console.log(field);
						return <TextField {...field} />;
					}}
				/>
				<Controller
					name="select"
					control={control}
					render={({ field }) => (
						<select {...field}>
							<option value="chocolate">chocolate</option>
							<option value="strawberry">Strawberry</option>
							<option value="vanilla">Vanilla</option>
						</select>
					)}
				/>
				<input type="submit" />

				<button type="submit">submit</button>
			</form>
		</div>
	);
};
