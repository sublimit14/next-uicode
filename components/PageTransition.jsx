import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

const TIMEOUT = 300;

const getTransitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
    },
    entered: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 1,
        animation: "blink .3s linear 2",
    },
    exiting: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 0,
    },
}

const Transition = ({children,location,}) => {
    return (
        <TransitionGroup style={{position: "relative"}}>
            <ReactTransition
                key={location}
                timeout={{
                    enter: TIMEOUT,
                    exit: TIMEOUT,
                }}
            >
                {(status) => (
                    <div
                        style={{
                            ...getTransitionStyles[status],
                        }}
                    >
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    )
}
export default Transition;