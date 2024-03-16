import React from 'react'
import STEPS from '../constants/steps';
import * as S from "../styles/stepTracker";
import { Index } from '../interfaces/steps';

const StepProgressBar = ({ index }: { index: number }) => {
  const getStatus = (stepIndex: number) => {
    if (index === stepIndex) {
      return Index.CURRENT;
    } else if (index > stepIndex) {
      return Index.DONE
    }
    return Index.YET_TO_REACH;
  }
  return (
    <S.StepProgressBar>
      {STEPS.map((step, index) => {
        return (
          <li key={step.name}>
            {step.icon &&
              <S.Logo icon={step.icon} status={getStatus(index)} />
            }
            <S.Label status={getStatus(index)}>{step.label}</S.Label>
          </li>

        )
      })}
    </S.StepProgressBar>
  )
};

export default StepProgressBar
