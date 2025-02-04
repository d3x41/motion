import { motion, MotionConfig } from "framer-motion"
import * as React from "react"
import { useState } from "react"

function Group({ children }: React.PropsWithChildren) {
    return (
        <motion.div
            layout
            style={{
                backgroundColor: "hsla(0, 50%, 50%)",
                position: "relative",
                width: "var(--width)",
                height: "var(--height)",
                display: "flex",
            }}
        >
            <motion.div
                layout
                style={{
                    backgroundColor: "hsla(20, 50%, 50%)",
                    width: "var(--width)",
                    height: "var(--height)",
                    position: "absolute",
                    top: "var(--offset)",
                    left: "var(--offset)",
                }}
            />
            <motion.div
                layout
                style={{
                    backgroundColor: "hsla(60, 50%, 50%)",
                    width: "var(--width)",
                    height: "var(--height)",
                }}
            />
            <motion.div
                layout
                style={{
                    backgroundColor: "hsla(90, 50%, 50%)",
                    width: "var(--width)",
                    height: "var(--height)",
                }}
            >
                {children}
            </motion.div>
            <motion.div
                layout
                style={{
                    backgroundColor: "hsla(120, 50%, 50%)",
                    width: "var(--width)",
                    height: "var(--height)",
                    position: "absolute",
                    top: "var(--offset)",
                    left: "var(--offset)",
                }}
            />
            <motion.div
                layout
                style={{
                    backgroundColor: "hsla(170, 50%, 50%)",
                    width: "var(--width)",
                    height: "var(--height)",
                    position: "absolute",
                    top: "var(--offset)",
                    left: "var(--offset)",
                }}
            >
                <motion.div
                    layout
                    style={{
                        backgroundColor: "hsla(220, 50%, 50%)",
                        width: "var(--width)",
                        height: "var(--height)",
                        position: "absolute",
                        top: "var(--offset)",
                        left: "var(--offset)",
                    }}
                />
                <motion.div
                    layout
                    style={{
                        backgroundColor: "hsla(260, 50%, 50%)",
                        width: "var(--width)",
                        height: "var(--height)",
                        position: "absolute",
                        top: "var(--offset)",
                        left: "var(--offset)",
                    }}
                >
                    <motion.div
                        layout
                        style={{
                            backgroundColor: "hsla(300, 50%, 50%)",
                            width: "var(--width)",
                            height: "var(--height)",
                            position: "absolute",
                            top: "var(--offset)",
                            left: "var(--offset)",
                        }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export const App = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <MotionConfig transition={{ duration: 2 }}>
            <div
                data-layout
                style={
                    {
                        display: "flex",
                        flexWrap: "wrap",
                        width: "1000px",
                        height: "4000px",
                        overflow: "hidden",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        "--width": "200px",
                        "--height": "200px",
                        "--offset": expanded ? "100px" : "0px",
                    } as React.CSSProperties
                }
                onClick={() => {
                    setExpanded(!expanded)
                }}
            >
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
                <Group>
                    <Group />
                </Group>
            </div>
        </MotionConfig>
    )
}
