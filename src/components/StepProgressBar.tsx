import * as S from "../styles/stepTracker";
import { Index } from '../interfaces/steps';

const StepProgressBar = ({ index, Steps }: { index: number, Steps: Array<any> }) => {
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
      {Steps.map((step, index) => {
        return (
          <S.StepProgressBarListItem key={step.name} status={getStatus(index)}>
            <S.LogoContainer status={getStatus(index)}>
              {step.icon &&
                <S.Logo icon={step.icon} status={getStatus(index)} />
              }
            </S.LogoContainer>
            <S.Label status={getStatus(index)}>{step.label}</S.Label>
          </S.StepProgressBarListItem>

        )
      })}
    </S.StepProgressBar>
  )
};

export default StepProgressBar
