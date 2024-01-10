import AllConsentCheckbox from "./AllConsentCheckbox";
import IndividualConsentCheckbox, {
  type IndividualConsentCheckboxProps
} from "./IndividualConsentCheckbox";

type CheckboxProps =
  | { variant: "all" }
  | (IndividualConsentCheckboxProps & { variant: "individual" });

const Checkbox = ({ variant = "all", ...individualProps }: CheckboxProps) => {
  switch (variant) {
    case "all":
      return <AllConsentCheckbox />;
    case "individual":
      return <IndividualConsentCheckbox {...(individualProps as IndividualConsentCheckboxProps)} />;
    default:
      return <AllConsentCheckbox />;
  }
};

export default Checkbox;
