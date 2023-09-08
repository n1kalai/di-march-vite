import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
	collection,
	addDoc,
	serverTimestamp,
	getDocs,
	doc,
} from "firebase/firestore";
import { db } from "../service/firebase.config";

const collectionRef = collection(db, "chat");

const getChatById = (id = "ePROp3iGpjy4BS6gG5C4") => {
	return doc(db, "chat", id);
};

const fetchChat = async () =>
	getDocs(collectionRef)
		.then((todo) => {
			console.log("todo", todo);
			return todo.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
				...doc.get("1"),
			}));
			// setTodo(todoData)
		})
		.catch((err) => {
			console.log(err);
		});

const ChatApplication = () => {
	const { t } = useTranslation();

	useEffect(() => {
		fetchChat().then((res) => console.log(res));
		console.log(getChatById());
	}, []);

	// https://fir-test-6a6df.firebaseio.com/users.json
	return (
		<div>
			<h2>{t("chat.title")}</h2>
		</div>
	);
};

export default ChatApplication;
