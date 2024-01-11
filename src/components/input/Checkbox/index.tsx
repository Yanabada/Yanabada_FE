import AllConsentCheckbox, { AllConsentCheckboxProps } from "./AllConsentCheckbox";
import IndividualConsentCheckbox, {
  type IndividualConsentCheckboxProps
} from "./IndividualConsentCheckbox";

type CheckboxProps =
  | (AllConsentCheckboxProps & { variant: "all" })
  | (IndividualConsentCheckboxProps & { variant: "individual" });

const Checkbox = ({ variant = "all", content, ...individualProps }: CheckboxProps) => {
  switch (variant) {
    case "all":
      return <AllConsentCheckbox content={content} />;
    case "individual":
      return <IndividualConsentCheckbox {...(individualProps as IndividualConsentCheckboxProps)} />;
    default:
      return <AllConsentCheckbox />;
  }
};

export default Checkbox;
