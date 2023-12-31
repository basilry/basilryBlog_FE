"use client"

import { useEffect, useState } from "react"
import dayjs from "dayjs"
import Image from "next/image"
import classNames from "classnames"
import LineBasic from "@components/atom/LineBasic"
import TextBasic from "@components/atom/TextBasic"
import { useCoreStore } from "@lib/stores/store"
import styles from "@styles/pages/main.module.scss"

const FIRST_TOTAL_YEAR_DATE = "20210913"
const FIRST_FRONT_YEAR_DATE = "20211201"
const FIRST_BACK_YEAR_DATE = "20220101"
const TODAY = dayjs().format("YYYYMMDD")
const TOTAL_YEAR = dayjs(TODAY).diff(FIRST_TOTAL_YEAR_DATE, "year")
const FRONT_YEAR = dayjs(TODAY).diff(FIRST_FRONT_YEAR_DATE, "year")
const BACK_YEAR = dayjs(TODAY).diff(FIRST_BACK_YEAR_DATE, "year")
const initYearHover = { id: "", hover: false }

const Main = (): JSX.Element => {
    const { darkMode } = useCoreStore()

    const [totalYear, setTotalYear] = useState(0)
    const [frontYear, setFrontYear] = useState(0)
    const [backYear, setBackYear] = useState(0)

    const [yearHover, setYearHover] = useState(initYearHover)

    useEffect(() => {
        const doCalYear = setTimeout(() => {
            if (TOTAL_YEAR !== totalYear) {
                setTotalYear(totalYear + 1)
            }
            if (TOTAL_YEAR === totalYear && FRONT_YEAR !== frontYear) {
                setFrontYear(frontYear + 1)
            }
            if (TOTAL_YEAR === totalYear && FRONT_YEAR === frontYear && BACK_YEAR !== backYear) {
                setBackYear(backYear + 1)
            }
        }, 150)

        return () => {
            clearInterval(doCalYear)
        }
    }, [totalYear, frontYear, backYear])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainTop}>
                <div className={styles.imageWrapper}>
                    <Image src="/my_face_hand.png" alt="myFace" width={250} height={250} />
                </div>
                <div className={styles.paragraphWrapper}>
                    <p>{"안녕하세요!"}</p>
                    <p>{"DevSecOps를 지향하고,"}</p>
                    <p>{"진정한 개발자를 꿈꾸는 법학도."}</p>
                    <br />
                    <p>{"Web FrontEnd 개발자,"}</p>
                    <p>{"'김바실리'입니다."}</p>
                </div>
                <div className={classNames(styles.paragraphWrapper, styles.english)}>
                    <p>{"Hello!"}</p>
                    <p>{"I'm aiming DevSecOps,"}</p>
                    <p>{"a law student who dreams of"}</p>
                    <p>{"becoming 'The Genuine developer'."}</p>
                    <br />
                    <p>{"Web FrontEnd Dev,"}</p>
                    <p>{"'Basliri Kim'."}</p>
                </div>
            </div>
            <LineBasic />
            <div className={classNames(styles.mainMid, darkMode && styles.dark)}>
                <div
                    className={styles.midBlock}
                    onMouseEnter={(): void => setYearHover({ id: "total", hover: true })}
                    onMouseLeave={(): void => setYearHover(initYearHover)}
                >
                    <p>Total Career</p>
                    <div className={styles.yearNumWrapper}>
                        <div className={styles.yearNum}>{totalYear}+</div>
                    </div>
                    <p className={styles.yearChar}>Years</p>
                </div>
                <div
                    className={classNames(styles.midBlock)}
                    onMouseEnter={(): void => setYearHover({ id: "front", hover: true })}
                    onMouseLeave={(): void => setYearHover(initYearHover)}
                >
                    <p>F/E Position</p>
                    <div className={styles.yearNumWrapper}>
                        <div className={styles.yearNum}>{frontYear}+</div>
                    </div>
                    <p className={styles.yearChar}>Years</p>
                </div>
                <div
                    className={classNames(styles.midBlock)}
                    onMouseEnter={(): void => setYearHover({ id: "back", hover: true })}
                    onMouseLeave={(): void => setYearHover(initYearHover)}
                >
                    <p>B/E Exp </p>
                    <div className={styles.yearNumWrapper}>
                        <div className={styles.yearNum}>{backYear}+</div>
                    </div>
                    <p className={styles.yearChar}>Years</p>
                </div>
            </div>
            {/* TODO: 커리어 호버시 그래프 보이는 부분 */}
            {/* <div>{yearHover.id === "total" && yearHover.hover && <p>total</p>}</div> */}
            <LineBasic />
            <div className={classNames(styles.mainBot, darkMode && styles.dark)}>
                <div className={styles.botImage}>
                    <div>
                        <TextBasic size="xx-large" bold="bold">
                            {"아래의 프로젝트들도 진행했어요!"}
                        </TextBasic>
                        <TextBasic size="large">{"I also worked on the projects below!"}</TextBasic>
                        <LineBasic />
                        <TextBasic size="small">{"자세한 내용은 Projects 페이지에서 확인해주세요! :)"}</TextBasic>
                        <TextBasic size="x-small">{"Find out more on the Projects page! :)"}</TextBasic>
                    </div>
                    <Image src="/macbook_Face.png" alt="macbook" width={200} height={200} />
                </div>
                <div className={styles.botBlock}>
                    <div className={styles.workContents}>
                        <TextBasic size="xx-large" bold="bold">
                            {"또하나의가족, Solution | Prototype"}
                        </TextBasic>
                        <TextBasic size="large" bold="bold">
                            {"2021.12 ~ 2023.06 | 1년 6개월"}
                        </TextBasic>
                        <LineBasic />
                        <div className={styles.contents}>
                            <div className={styles.ciLogo}>
                                <Image src="/hecton.png" alt="logo" width={30} height={18} />
                                <Image src="/ddogaLogo.svg" alt="logo" width={120} height={30} />
                            </div>
                            <TextBasic size="small" bold="bold">
                                {
                                    "장기요양기관 내 어르신 대상 장기요양 행위를 기록하고 시설을 관리하는 백오피스 솔루션 웹 프로젝트입니다."
                                }
                            </TextBasic>
                        </div>
                    </div>
                    <div className={styles.workContents}>
                        <TextBasic size="xx-large" bold="bold">
                            {"또하나의가족, Solution | Renewal"}
                        </TextBasic>
                        <TextBasic size="large" bold="bold">
                            {"2023.07 ~ 2023.09 | 3개월"}
                        </TextBasic>
                        <LineBasic />
                        <div className={styles.contents}>
                            <div className={styles.ciLogo}>
                                <Image src="/hecton.png" alt="logo" width={30} height={18} />
                                <Image src="/ddogaLogo.svg" alt="logo" width={120} height={30} />
                            </div>
                            <TextBasic size="small" bold="bold">
                                {
                                    "공단의 고시변경으로 비즈니스 로직 등 다수 기능 변경 필요로 인해 리뉴얼 작업이 진행되었습니다."
                                }
                            </TextBasic>
                        </div>
                    </div>
                </div>
                <div className={styles.botBlock}>
                    <div className={styles.workContents}>
                        <TextBasic size="xx-large" bold="bold">
                            {"또하나의가족, 돌봄노트"}
                        </TextBasic>
                        <TextBasic size="large" bold="bold">
                            {"2023.09 ~ 2024.01 | 4개월"}
                        </TextBasic>
                        <LineBasic />
                        <div className={styles.contents}>
                            <div className={styles.ciLogo}>
                                <Image src="/hecton.png" alt="logo" width={30} height={18} />
                                <Image src="/ddoga_logo.svg" alt="logo" width={115} height={20} />
                            </div>
                            <TextBasic size="small" bold="bold">
                                {
                                    "타사 솔루션과 연동되는 요양기관 가정통신문 및 어르신 요양기록을 확인하는 모바일 웹 앱 프로젝트입니다."
                                }
                            </TextBasic>
                        </div>
                    </div>
                    <div className={styles.workContents}>
                        <TextBasic size="xx-large" bold="bold">
                            {"또하나의가족, Store | 000 시스템"}
                        </TextBasic>
                        <TextBasic size="large" bold="bold">
                            {"2024.02 ~ (미정)"}
                        </TextBasic>
                        <LineBasic />
                        <div className={styles.contents}>
                            <div className={styles.ciLogo}>
                                <Image src="/hecton.png" alt="logo" width={30} height={18} />
                            </div>
                            <TextBasic size="small" bold="bold">
                                {"미정입니다."}
                            </TextBasic>
                        </div>
                    </div>
                </div>
            </div>
            <LineBasic />
        </div>
    )
}

export default Main
