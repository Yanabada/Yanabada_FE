import AllConsentCheckbox, { AllConsentCheckboxProps } from "./AllConsentCheckbox";
import IndividualConsentCheckbox, {
  type IndividualConsentCheckboxProps
} from "./IndividualConsentCheckbox";

type CheckboxProps =
  | (AllConsentCheckboxProps & { variant: "all" })
  | (IndividualConsentCheckboxProps & { variant: "individual" });

const Checkbox = ({ variant, ...props }: CheckboxProps) => {
  switch (variant) {
    case "all":
      return <AllConsentCheckbox {...(props as AllConsentCheckboxProps)} />;
    case "individual":
      return <IndividualConsentCheckbox {...(props as IndividualConsentCheckboxProps)} />;
    default:
      return <AllConsentCheckbox {...(props as AllConsentCheckboxProps)} />;
  }
};

export default Checkbox;
