import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
    return (
        <Link to="/video/test" style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image
                    type={type}
                    src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
                />
                <Details type={type}>
                    <ChannelImage
                        type={type}
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGBgaGRgYGBoYGBgYGBgZGRgZGRgaGBgcIS4lHB4rHxgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISE0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDE0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA+EAABAwIEAwYEAwcEAQUAAAABAAIRAyEEEjFBBVFhBiJxgZGhMrHB8BNS0RQzQmJy4fEHI4KiwmNzkrLS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAwEBAAMAAAAAAAAAARECITFBEgMTUWH/2gAMAwEAAhEDEQA/APP20ypdFIRZdYydUETCV11OUU2gICmYwBAAsBCkzSpqlEm8WU1OnOyaULKYTjhSbo1lEKZg2hSeq1rMqa9s3OyPxNNrQXE2CxvF+MF5LWWbz5oOLXF8cYyw7x5DbxKqsR2hqO+FrW8tyqdrCdk4MKeDBVXi1Z2rz5JreJ1RpUd7H5qJ1BwExZJmHzaIMW3jVYfxA+IVtw7jrHd2p3T+b+E+PJZp9MjVcDJRgej02clM+n3VheH8ZfSGXMSBoLHyvstVwfj9OsMr+4/lserT9CpwkzydFzJuiq9ME2XW0hCJQFFEG6YYBUr2HZNbQnxTAWs1NdSgSp2UjMIyvQGQKpCtVjWNITf2cIl1MBIMskavfR5KCpT2RsRKGc2TKYC/hpIiEkgOp012tS5BEUWIllOUJBU6ZIARbaA3Kl/BjRIUig9NaBoVO2lDbKFlC6LFPY6JpQ/hwuVHQL26okROiyXazjOYmkw2Hxkbn8qSoruPcYNQljCcg1P5v7Kro0ZPP6KNjZ0RbO6I3OvVORRj40Hn1UtFrR93UL6mw0XWep0DUAYyo02yyOt0nUmE93unpYKKm12hMdBdHUbXJPoZTAdjWwWvg8nDf/B+aGfhcr7ixPlBuFbOp03ax6fNdbQAHOIIPLYJBna/xERCjaYurXHYB0zG0+XP1Qf7IQJPL7+SQabg3aam1obXDp/MAHDxImVfUsVTqGabg5vT6jZeZOCN4VWLXjvlk6OB0O0jcJYWPSMQ0ASEHT1kpnD8X+K0hwh7bPb8nDoUQ6gQgH0KYJTsTT22TWUyBZNLHOOqqVNQVGTZNtop30yNUmEaQgAqrAdEK6nCsalMbId9OyMPQX4aSI/DKSeDVmxghPapKTE4shRE0mOUlRKmxO8UBHSZBlFQHJgMplaoGNc9xgNBJPgjRin7T8TFFmVp77ht/CNz47DxnZedudKO4tjnVajnE6mf0HkgAmuRLTELr6ijL05jJTM+k0uNvUqyoYFou4/NR4WjcAAk8lafg5Gy8eOhI5T/AJ8kAmUmMFgCdtNev9011Cq64FjtH6KTC0y+50F+ULS4CjLRA2tb76b7qOulTlmBgXgXGiLp4dwFwfuVp24O+4/qhs720RlPh03Ak9SLeVlE6O8sW50y0zax+UDlZNq4Qkd0Az03tHpA+4WvrcAbcmW76H6/qq7EcOcPhuPvl93K056RYybuCdQXHXx1IEa/L60mLoZHZZkjWNjystpicO5oMkgnWI9ByH340GOwGUS0Set1XgHcC4rkewuN290n81M6g9RqPAL0KpovIwC11x4hb/s/xMvpsY86d1juYAs13UDffxUp6i8e1zQOSZE7I4MBaE0MRLqQTxKi/Cg6KxdSaVAGwUaAtSgEM+gFY1WoVzQTdP8AUGBvwgkivw280kfoYkYxPfRlRUnwiWVAoNFSowdVLkBUQecyIPROA3IFmO2WOLWimDyLrjWxDfQg/wDIcitHjcSKbHPOjR6nYeq804zXc50vMuNz5yY8p9S5M4qyUkkgE1HNajcO3n5AanxOyFptJMAK0wILTIH/ACImPCbIC04fSyCYAJ+vQaDyP6GVGB7ocQcv8OrWncu1703i/U8wXPqaNlvN/wDGbaMG2l3WHVPw5yDLtyEwT9fvZO3IUixo02huVvqtXwbCxA81W8B4aXw4tgbA7/otvgcIBC5ur58NufTjMGHWhGYbhDXbX5gkGPEaqzo4MQFZ4agAic2i9KzD8Ap6lpPiTHpoUzHcAY8fD7laEBcIV3nEbWBx/ZQR3RB9fdYDj/DPwnQ9vgdpXu1ZgXn3+o2DDqDnAXbf0BSlsHt4pXhzy0gamPHlr9/K04E8ZwwalwMbSJkdR1+zncQ/vk9URg8YWPa8G4IK0+FY9bwwBb6hPNNDcNrh9NrhoQD58j1RrSpzyzQOYFDUYSiKwTGlWQGpKHcEbVKHc1C0GQpKaCkkA1OopmlCZSApqT1GjBLLokFCsep61XKwu3At1O3ur5KqPtHi2nun4aYzuH5nkdxs9Jv/AFhYCvVLiSfuTJ9yT5rQ9oMVMMB1lzzz3J8bn0as2GynDhqfkO4Utm6apjpNzJTUPwjKNszoPn9Fb/tFFnwvB8J/yFlSp6LC6ye4Waun8RzWaPvoFo+zvCi4h7/G/wDfqhOzvAZIc+OYGvqt1hsJlC5++rWvPODsA0CArnCOvZUrWxbNl6iJ9wQpsNw8OMuxVaDsCxvuGyp558qtbTC6BHNasaeAD46WJqB40zuDmn0AI06oWp2ixWEcBiGNewmM4PdM7B8WPQhbyYxsb5JVnCOM0sQ3NTdfdpgOaeRH1EhWcp0kNYLNdpsOH03tOha4ey0tUrL9p8U1lN8uAOR5AnUhpNvRZVXL5xxlMHvDXf8AVAgo3CnSdIhddhodHitfhV6F2RxGekzwLT4tgfL5BaN7Vkux5ylzOZDx4uF59CteVnvlFgR4K40WKIc4JMYLqt0gDuqaQF3EDvQmgGUap3KknyUkaFbWamMZspH6KBuqiiDKLDEKHHVsrb7NJ9e6PUZx5qRla6p+02Jhhj+LK35n78U+aMZDG1i4ucdXEx/SDt4uHsVAwAJV3yfvy8E1ui0VIc1skonGUCxjRuQHH/kJHt813D0iC0bkg/8AYT8iiOKd58DTbysPkmAmBwWdzc3daXZcx0zWsDzuPVF0WhjyBsSPRa/A0GHAimGFzg3M4gAw5znlpnXNLHABswGibXWSyy7NzJWfW6qY9B7PGQFssLhw5ef9nMRYL0DhNXRY321zwE4zgntEtaT4LH4niWKZOSg+G6uJaB8yvX/ww9sLNcX7PvLi9kGRlc1wJY5u4c0ET4zZayI34yfBeNYmqJFGo6HuYRTqUi/M1he7uPAJho89losJivxmmHZ2HuvDm5XsdvTqMO/p4aEl8Dpig7P+zOL3WzF4OUE94/AL6cz1VtQ4aX1TiHNDMw741zACGbC459SFXUln/Uy36o+z/D2MxHcJbBOYAm9yY9StlisUGNLnGABJVFw+iBiS4aG36KXtdRqvYG0bEm5hriAQ67WuMEgxqDabTCzm2H1mqXGdo8TULhTa2iyfjfdxHPIJI8CPNZjjpw9PD1atWucRVLXNZLiGfiOBDIY0ySNTJ0abBXfD+zTX0HvxTDIpsa1+eo17qjM5fUALpZJLbCBbSBJ8v49g/wAGq2nnL4Yx8u0BeO9uZIga9FrOckRqpw9CxPVWmFwme/IGepA+o+qfw3DAtvuCPlHu1w80Vw1uV0c/8fVXnglxwWhkqN/pcB7EezT6rTtcqDDGHsPI+sgj0ufRXYK5+vFKoa6602Se267UZCcoDvAm6iquE2U+pUWKYAUwb+KuqDKkjyDKpEIZ9l170+mwuRfNE8QJnlUnaeuMrW8jm9iB9Vo8fh4aXCxAkm2WBczfRefcVxJqOk6CwHTmic2XycugpRODpZnAeA91Axlz0t7wrTBDLJHX2Fv+xC1h6kb+8byj5kn6qR7P90D+f5vTG/vPCP0PyTsbIcD1J85n5pknxmPq0QWNINNw+FwloMggx4tkciJF0FgXlwurTjVIPZmHj5G6qeF8lHSuWp4I7K5bzhVfRYjhtPda7h2gXPfbfn03XDMQLK7Fwslw95C0uErSIW3F+M++fqV1Bp2CHx7w1kDdGrJ9o+KDOKbfiAk9OXmn1ciOZtS4BvfHirfHUw4wRNv1WZ4JXJfB5rT1D3vL6qOfS+p5ZjE8AaXgmSJkgkwbzcaHQa8l4/2/eBj6gbo38NvnkaT7uXufFcaymx73kBrWlzidg0ST7L554lizXxH4rtXnORy7xgeQACvn2nqrPDQAQNjbr3iQFOyp3g7S5+Y19j5oJ/dc4cxb79V1lSb9fm1plaoabDfG0f1f9ZPyPsr5jJCznDKkPpny9RH1C0tB1lj17Ko3wE175SqNkppYAoCFg7yhxZlymLwLoXNmdKKHYST4XUGCa210RhtCoi1D8Txn4VM5fjdZg3nnHT9FpzPKaqu0PEhenPdbDql/iIPdYPO59N1h6jy5xJ3MoziVSTHmep5/eyAAVnJgnDt9/wBVZYYa8gLnyJP0QeGECelvUyiHGGH+Yx5SJ9gEKdZU7znczI8Nh8kXjmyAdw6PJzcw9w5VrTYdT9beyvKrJDxvkYR5QD7EpwjsC8VabqZ1AjyJlp9wPRUuFaWVCx2x9VNRxBpVQdpAPWRP1I8kZxqgCW1WGdL8xsfvkRsp6mxXNaPhdwtTww2CwnAcZMCVueGuXN02l8NRgSrnDvhUGEKs2vhVzS6aCmZCxXGeD1G131Gw5rzInUGAI6/CtAziLWtkuHmQq/F9pqQMF7T4S75W91p1nULidb4msxRx9alXDHUSw6hwOdrh6Aj0W1ZiXPaHObljSRBMiNNgqep2mouBm9oktgt8hIPqpn8VYaJfmGWDebAASSfJT68K756nmzGD/wBV+MltIUGm9S74N8gNh/yI9GnmvMsNdzJ5EeUK07V491aq97v4iMo5NEhg9PclU+DdJPQfRa8zIwt1d1X2a7fun1AKfhmZjGkfQmPYBC0nZqfUNkeIn/xBROGN3DkBPhYg+QVEveFvsyxs8AeBdp5QtPQdAlZ7AUpYwbudmJ6hsz6q6pGRbzB5jUT9Vj115Dr3rj3WUYPehPrthROixxhbuFAGgkkBIPT8MdU90G5V1TJIGqr8Uys9x3FA1HSbMYPJxuT4wQFfPF5WJ49X77wN3CfAAfVaT/QkVFZ+Ykne6bTH37ppUlJWoU12gU2IfZo5CfQQPn7IOme8FK6pMnnp4DT3lTDsT0WS5o8z6/fqr6g4F5/pg+cQq7h9OGucfitHnER5j5Iyg4Zj/wAfmPo33V8+CoDidCC6OR9ZMfNLB4qWFjrjbpOo9fojMYyZ8J9RP090BhsP34Oht6qe7h8wsM8sdI0W64FxIOAvdY0U8jiHXGjvDZw+90cym+k6W6LnraTXrGAr6K4ovB1XnXCON6B1luOHYprgLo5pdRDxrhDHnO1neiDBcJ/qAN/FVGHp02gtq0xEGIF52h0zyW9wuGDhqp6nDKRHeYD4gFbSX2rj+/5mV5s+lRgsYyXGYBkmZMRe1oVX2mxjKTBhaXxGH1e8TG+WTzMHwA5rc9pa9PCUH1YaA0WAAGZxs1vmSB5rwmnjnOc97zL3OLieZNyjmbfJf1/t+5k8Gcdu+BpMDwAt7EKswRhx/od6xZFV60kuN4J+n9kFQbDlVrCRbYN9w3Y28j/hc/aCKxy846GLQfJDUHwQes+hspOFUDVxDQN3Sejd/ZK08b3hGjecSB/Lf/8AQHkrJndeeTtPEa+3yUGHoS6BYtbAI2Lrn5e6nq1J7rhlcNDtI5fpylYdXUk8XXKgSY+b+vQ7hJ7lIDOSakU8BGg3MUkshST0K6s8wvPuK1c1V5GmYrX8exRpsOXU2G5vy5eKwhXTJ9KOBOPJcaVwlM0rTuicK0OeJ0CGaJEdURhjlcCpq1s98e+nQH+yiZXguM/xQPJRVKkkAbfYn5+aHqu7s/f3qi0pF7ReHDrGnh/b5o3D8OsHcz/j6Kk4PiJe0HS3pv8AqtxSGVpB2czzk/o35rPrr4055U+IwhscswC14/M2Y+c/YRvDcMHA03XLQCx35mHTzGnktTjOE2kdfdUT6DmPEcyWOOgJ+Km7+Ux8yLrNe6TeE9FzFcX/AGJ1Nri52fNDQJLQ3Lfnv7LScOiowOAsdQdQRYgjmDZed9t6v4mJOQkGn/tSJEQHF4AGty6T4CVfPMR11XonB+32GcADUAPWR89VZ1+3uFaCXYhltQCXHyaLleFYWGNzakghvQc0DVfMq4j21vbrtkcc4Mpy2gwyAbOe7QOcNgBMDqSdgM3R0QtOmSQBqSrFzLhjdtfHdPcFiGlhs78u0n9ShAe8Y5wOne/stDgcEHB5Jy5WktNtL+sqhfQcCQNxJSl0QmvF9yRDekmZWq7J4YM70S8wY/K2DEnrM+QVHw/AlrpdynwB0P18Fp8A8U3yNLf/ABP6X/681PdFaKgMh9z1KmfDtRMqEnRTUwskh20Tmlh8WnfwOx9flCqEjUQjKAuosdqlRAZT6RXA2ydTYQiCp8wXF3KuJ4lhO1mJHdbuJPnED2J9VklY8Srmo8uPl0A0CriuqHCSSTm3smE+GbupHCFNh6cNk6bDn18EJiHyUrDlPD+SIbWYWPa6ztWnUGNjyOqDY6E5wMW03sj8nqTAvIe2NcwF9Nd+i9Cz5mNImSws5d9oJbPXuOaesrzS+voVvMJjRVpCs0gOH7xn5Xtg5x/K4CCbxIOxKy/pz9ac9PU8I8Ppsd+ZjT6tB+qrMdw8ODmmwO41B2I6gpnY7E/iYZh3bLNZ+A5R6gA+atcS3os6fqqbhDXMeSeeWoNp0ZUHQ2B8f5V5VxXGubiMS11yX1mg7tl7vbovW3vyvDiObXjZzDYg8/vmvN+3HBslQ1mnMyo90ncPmRPi0h3mVfN8FZ5Ziq/QDZRsbJTsvqVY4HD3AAzPOg2bzLinpGYRkGGAl2gMb9Fb4Lh2Wxu4i/8ALOpncxHmVY8PwjaYM3cdXHryCKpUu650XJ84GgUXpIU0e48N3c1g/pygn0Bd6IXh/ChVaX5JOeWwbkNJlom1wY8QjAXZIb8by4N/lBPed4ARforzAYcMY1g0AhT+itZzE4UZczDIa43vOWb5gbgg6g8iFylTMW/hsPEWy31Bi3jGq1dbBMcc0X3IJE+Ma+abQwDGiAwR6p6Wq7h+J7rA7TRp8LR4/NWrHbDX7uUx9JoMZWxygR6KelTAFmgeAASBUAosZqpWmCnYpgiUECY+Bon0blMfYKOk+6APhJQfiJI0nj1R6gRmPY1pDWmYHePVBrqhnspk+A1OwRVBg1iANzv16Idt4Gw9FLmk8gPomBLnl2xM6Dn/AG++qirNgETJ3MadAmHERpr9x5JlM899eZTwOBk6Sd7LrRzRLqxLQwQ1vID4jzc7V3nYbQoQE/yD2UWusXAevsYU+AxJpPzMfEbAyD4jQ+qha1NqUZFtUrycr0HsRxkMe5rPgcA57B/AbNlo5aR4wvRjWDgCDI+7r584biXU3h7TDhOolpBBDmuG7SCQV672T4uMRTDmmCO5UbqWv1a7q1wEzznyw65xpKt8YwEddiqLE0W1GPpvEtIt010+9lpalGQqbE4UtdmGkR7ys/VaTHmWO4Q+g+IzDYkaq+4ThcrSdXHUxp0HILXsY11nAHxGiixOAtLRdK1PUUTcOReZjROcx5sIA5yZ9AjHJ1PqhlobC4fKSTckRPQaAcgjmPCjqRsmZCgrVix4SrVIChYywun7QUEZQMlElCtYGmxUuZLQQTsSMwAUTnrj6yYNxI7irA8DRG4glwgKFuGjVARftJSUv4LUk8DzPi9IB5gRuVXK7x9Alpc4jy/VUsLplCXQR93XHOtC443KZKcMlK1RKWmqhJQpGhMaFK0KiOaFI0JgCkamAxZ3nQNL/JWXZ/ir8NUbVp6jVpPdqMtmY7012MFClsSeZj0An5hRNGXyPsVGHr3/AIXjGYikyrTMseJHNpFnNdyIMg+C7icLK8q7D9o/2Wrkef8AYqEZ/wCR8QHjpEAjlfaD7KWgiQZBuCLgg6EHcLn75xpOmXxGHLTIU9BwcIKs8ThlUPYWGYtusb4X7A8SwpBzNExqPzD9eSEZBAc0yDcFaOpSDmyNCFk+LMdh3Gq0F1MmarBq3/1GdeY311TnlHXP0flXWslDUMUx7Q9jg5puCPux6KdtayMZpMuyabJrKqYytMp4Dajl19SyY94UBqSlYDJdMzZTNfJCHL5K4HkFGBZZkPUrBOY+10G54zFUR344SUGZqSMDI8TnIVnSVpcQ8OYR0WfrUiCuiGilIJFJMOhTMUTVMxVAlapGqNqkarJK1OCYE6UA91xHJQm5HWQfv1UkqEm8eaA5TO24t5jReo/6Z9pwWjCVXAEfuCTqN6XiNW9JGwny5xhx6gH0sntdf3Hjuo652G+kajAq3FUAQvEqXGsS2MuJrgDQfivj0JhEjtNi9f2mp5ukehssr/G1c6x6lTqGm692HUbjqP0ROKwrXtzNIIIsRoV5UztVihrWzDk5lM+4aD7qwwHbevSMljHtOrRmZJ5gyYPWFH+HqD9aXGcFUwLzWoNmk4zUp/wj+Zv5fp4aWPDuJ067czD/AFNPxNPIj6qzwHaLD43/AGy0se4EZHwWvtcMduY2IB1XnXEqD8BizksJlvJzCbtPT+yPzvi+ys309CyhRvAaLIbCY5tVjXs0cPMHcHqCmYmopzEOmoE3MAhS9RPeiwxjCE97Aq4PTzWIRIBrnbSm1Iyk7oQVxuuOqyNU5CQT1XUyQkngUqr8XsupLQ1a7bwTUklQOapmJJKoSZqkakkqN0J6SScBKJ3xeSSSCKp8Q/pKTtvFJJIJWpySSZpFG9JJIJ+Gfvaf/uU//uFff6ofvafg76JJLLr3Fco+x37p/wDX/wCIVxXSSWXXtH0K5RvSSSNEU52iSSISF665JJMqakkkmH//2Q=="
                    />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>Lama Dev</ChannelName>
                        <Info>660,908 views • 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;