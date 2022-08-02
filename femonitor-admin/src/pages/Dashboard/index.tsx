import {
  ClockCircleOutlined,
  CloseSquareOutlined,
  InfoOutlined,
  UndoOutlined,
  WarningOutlined
} from "@ant-design/icons";
import { Col, Row, Select } from "antd";
import { useCallback, useState } from "react";
import { timeSelect1, timeSelect2 } from "./config";
import style from "./dashboard.module.scss";
import { IOptionType } from "./types";
const { Option } = Select;
export default function Dashboard() {
  const [timeSelect, settimeSelect] = useState("1");
  const [queryTimeSelect, setqueryTimeSelect] = useState("30");
  const timeSelectChange = (value: string) => {
    console.log(`selected ${parseInt(value)}`);
    settimeSelect(value);
  };
  const querySelectChange = useCallback((value: string) => {
    console.log(`selected ${parseInt(value)}`);
    setqueryTimeSelect(value);
  }, []);
  return (
    <div>
      <div className={style.header}>
        <Select
          defaultValue="1"
          style={{ width: 120 }}
          onChange={timeSelectChange}
          value={timeSelect}
          suffixIcon={<ClockCircleOutlined />}
        >
          {timeSelect1.map((item) => (
            <Option value={item.value} key={item.label}>
              {item.label}
            </Option>
          ))}
        </Select>

        <Select
          defaultValue="30"
          style={{ width: 120 }}
          onChange={querySelectChange}
          value={queryTimeSelect}
          suffixIcon={<UndoOutlined />}
        >
          {timeSelect2.map((item) => (
            <Option value={item.value} key={item.label}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className={style.title}>健康状态</div>
      <Row gutter={20}>
        <Col span={6}>
          <Select
            status="error"
            suffixIcon={<CloseSquareOutlined />}
            style={{ width: "100%" }}
          ></Select>
        </Col>
        <Col span={6}>
          <Select
            status="warning"
            suffixIcon={<WarningOutlined />}
            style={{ width: "100%" }}
          ></Select>
        </Col>
        <Col span={6}>
          <Select
            // status="success"
            suffixIcon={<InfoOutlined />}
            style={{ width: "100%" }}
          ></Select>
        </Col>
      </Row>
    </div>
  );
}
//  https://developer.51cto.com/article/706002.html
