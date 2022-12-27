import { useEffect, useState } from "react";
import {key} from '../key'
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import { Container, Form, Table } from "react-bootstrap";
export default function Schedule() {
    const [json, setJson] = useState();
    const [classInfo, setClassInfo] = useState();
    const [classOptions, setClassOptions] = useState([])
    const getData = async () => {
        const result = await axios('https://open.neis.go.kr/hub/classInfo?KEY='+ key + '&type=json&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452')
        return result.data
    }
    
    
    /**
     * classinfo 객체 구조
     * {
     * 'grade': int,
     * 'class': int
     * }
     */
    const parseClassInfo = async () => {
        let data = await getData()
        let classinfos = []
        console.log(data)
        if (data) {
            data.classInfo[1].row.forEach(element => {
                classinfos.push({
                    'grade': element.GRADE,
                    'class': element.CLASS_NM
                })
            });
        }
    
       return classinfos
    }


    const fetchSchedule = async (grade, class_, from, to) => {
        try {
            console.log(key)
            const result = await axios('https://open.neis.go.kr/hub/hisTimetable?KEY='+ key + '&TYPE=json&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452&GRADE='+ grade + '&CLASS_NM='+ class_ + '&TI_FROM_YMD='+ from + '&TI_TO_YMD=' + to)
            setJson(result.data);
            console.log(result.data);
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        parseClassInfo().then(setClassInfo)
    },[])

    const getGrades = () => {
        let grades = new Set()
        classInfo.map(e => grades.add(e.grade))
        console.log(grades.values)
        return grades.values()
    }

    const getClasses = () => {
        let classes = new Set()
        classInfo.map(e => classes.add(e.class))
        return classes.values()
    }

    const handleGradeChnage = (event) => {
        // classInfo.filter(e => {e.grade == event.target.value}).
        setTest(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
        <Header/>
<Container>
    <Form>
        <Form.Group>
            <Form.Label>학명</Form.Label>
            <Form.Select onChange={handleGradeChnage}>
                {      
                   classInfo ? [...getGrades()].map(e => (
                        <>
                        <option value={e}>
                            {e}학년
                        </option>
                        </>
                    )) : null
                }
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Select>
                {classOptions}
            </Form.Select>
        </Form.Group>
    </Form>
    <Table>
        <thead>
            <tr>
                <th/>
                <th>
                    월요일
                </th>
                <th>
                    화요일
                </th>
                <th>
수요일
                </th>
                <th>
                    목요일
                </th>
                <th>
                    금요일
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>
                    1교시
                </th>
            
            </tr>
            <tr>
                <th>
                    2교시
                </th>
            </tr>
            <tr>
                <th>
                    3교시
                </th>
            
            </tr>
            <tr>
                <th>
                    4교시
                </th>
            
            </tr>
            <tr>
                <th>
                    5교시
                </th>
            
            </tr>
            <tr>
                <th>
                    6교시
                </th>
            
            </tr>
            <tr>
                <th>
                    7교시
                </th>
            
            </tr>
        </tbody>
    </Table>
</Container>
        <Footer/>
        </>
    )
}