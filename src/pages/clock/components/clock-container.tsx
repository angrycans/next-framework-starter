
import { inject, observer } from "mobx-react"
import React from "react"
import Clock from "./clock-view"
import { IClockStore } from "../clockstore"


export interface ClockContainerProps {
    clock: IClockStore
}

@inject("clock")
@observer
export default class ClockContainer extends React.Component<ClockContainerProps, any> {

    // props: ClockContainerProps;


    public componentDidMount() {
        this.props.clock!.start()
    }

    public componentWillUnmount() {
        this.props.clock.stop()
    }

    public render() {
        return (
            <Clock
                lastUpdate={this.props.clock.lastUpdate}
                light={this.props.clock.light}
            />
        )
    }
}

