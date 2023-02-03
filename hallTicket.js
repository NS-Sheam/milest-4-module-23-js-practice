// for first 100 ticket 100tk
// for second 100 ticket 90tk
// for remeaning tickets 80tk
function movieTicket(ticketAmount) {
    let first100Ticket = 100, second100Ticket = 90,
        remainingTickets = 80, total;
    if (ticketAmount <= 100) {
        total = ticketAmount * first100Ticket;
        return total;
    }
    else if (ticketAmount <= 200) {
        var frist100tTicketTotal = 100 * first100Ticket;
        var remaining = ticketAmount - 100;
        var reaminingTicketTotal = remaining * 90;
        total = frist100tTicketTotal + reaminingTicketTotal;
        return total;
    }
    else {
        frist100tTicketTotal = 100 * first100Ticket;
        var second100TicketTotal = 100 * second100Ticket;
        remaining = ticketAmount - 200;
        reaminingTicketTotal = remaining * remainingTickets;
        total = frist100tTicketTotal + second100TicketTotal + reaminingTicketTotal;
        return total;
    }
}
var buyTicket = 220;
console.log("You Have to pay total %d taka in cash", movieTicket(buyTicket));