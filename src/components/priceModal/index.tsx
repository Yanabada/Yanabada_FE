import * as S from "./styles";

import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";

import { numberFormat } from "@utils/numberFormat";
import { feePolicy1, feePolicy2 } from "@constants/feePolicys";

interface TableRowProps {
  cancellationDate: Date;
  daysBefore: number;
  originalPrice: number;
  percentage: number;
}

interface PolicyTableProps {
  checkInDate: string;
  originalPrice: number;
  policyNumber: string;
}

const CancellationTableRow = ({
  cancellationDate,
  daysBefore,
  originalPrice,
  percentage
}: TableRowProps) => {
  const today = new Date();
  const isToday = format(today, "yyyy.MM.dd") === format(cancellationDate, "yyyy.MM.dd");

  const cancellationText =
    daysBefore === 0
      ? "체크인 당일 및 No-show"
      : `${format(cancellationDate, "yyyy.MM.dd")} 23:59 전 까지`;

  const cancellationFeeText =
    daysBefore === 0
      ? "취소 및 환불 불가"
      : `총 판매가의 ${percentage}% ${numberFormat(originalPrice * percentage * 0.01)}원`;
  return (
    <tr className={isToday ? "today-row" : ""}>
      <td>{cancellationText}</td>
      <td>{cancellationFeeText}</td>
    </tr>
  );
};

const CancellationPolicyTable = ({
  checkInDate,
  originalPrice,
  policyNumber
}: PolicyTableProps) => {
  const [tableData, setTableData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getFeePercentage = (policyNumber: string) => {
      if (policyNumber === "YNBD_1") {
        return feePolicy1;
      } else if (policyNumber === "YNBD_2") {
        return feePolicy2;
      }
      return [];
    };

    const feePercentage = getFeePercentage(policyNumber);

    const rows = feePercentage.map(({ daysBefore, percentage }) => {
      const cancellationDate = addDays(new Date(checkInDate), -daysBefore);

      return (
        <CancellationTableRow
          key={cancellationDate.toString()}
          cancellationDate={cancellationDate}
          daysBefore={daysBefore}
          originalPrice={originalPrice}
          percentage={percentage}
        />
      );
    });

    setTableData(rows);
  }, [checkInDate, originalPrice, policyNumber]);

  return (
    <S.PriceTable>
      <thead>
        <tr>
          <th>기간</th>
          <th>취소 수수료율</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </S.PriceTable>
  );
};

export default CancellationPolicyTable;
