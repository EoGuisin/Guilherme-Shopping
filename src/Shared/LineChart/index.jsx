import React from "react";
import { ProgressBar, Wrapper } from "./styles";

function LineChart({ title, percentage, color }) {
    return <Wrapper>
        <span>
            {title}:
        </span>
        <ProgressBar
            percentage={percentage}
            color={color}
        />
    </Wrapper>
}

export default LineChart;