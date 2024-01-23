const formatTimeUntilSaleEnd = (saleEndDate: string): string => {
  const saleEndDateTime = new Date(saleEndDate).getTime();
  const currentDateTime = new Date().getTime();

  const timeDifference = saleEndDateTime - currentDateTime;

  if (timeDifference <= 0) {
    // 이미 종료된 경우
    return "판매 종료";
  }

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) {
    return `${hours}시간 ${minutes}분 후 판매 종료`;
  } else {
    return `${minutes}분 후 판매 종료`;
  }
};

export default formatTimeUntilSaleEnd;
