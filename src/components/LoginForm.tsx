import {FC} from "react";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {authAC} from "../store/reducers/auth/action-creators";

export const LoginForm: FC = () => {
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(authAC.login('user','123'))
    }

    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}