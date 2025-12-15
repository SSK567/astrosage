"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Loader2, Sparkles, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  InterpretBirthChartInput,
  InterpretBirthChartOutput,
  interpretBirthChart,
} from "@/ai/flows/interpret-birth-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  birthDate: z.date({
    required_error: "A date of birth is required.",
  }),
  birthTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)."),
  birthLocation: z.string().min(2, "Birth location is required."),
});

export function BirthChartClient() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InterpretBirthChartOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      birthTime: "12:00",
      birthLocation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);

    // This is a placeholder. A real app would use a service to calculate this.
    const planetsInHouses = {
      Sun: "10th House",
      Moon: "4th House",
      Mercury: "9th House",
      Venus: "11th House",
      Mars: "1st House",
      Jupiter: "7th House",
      Saturn: "2nd House",
    };

    const input: InterpretBirthChartInput = {
      birthDate: format(values.birthDate, "yyyy-MM-dd"),
      birthTime: values.birthTime,
      birthLocation: values.birthLocation,
      planetsInHouses,
    };

    try {
      const interpretation = await interpretBirthChart(input);
      setResult(interpretation);
    } catch (error) {
      console.error("Error interpreting birth chart:", error);
      toast({
        title: "Error",
        description: "Failed to generate interpretation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }
  
  const resetForm = () => {
    setResult(null);
    form.reset();
  }

  if (loading) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 max-w-md mx-auto h-96">
            <Loader2 className="w-16 h-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-foreground/80">The cosmos is aligning for you... Generating your reading.</p>
        </div>
    );
  }

  if (result) {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in-50 duration-500">
            <h2 className="text-3xl font-bold text-center">Your Cosmic Blueprint, {form.getValues('name')}</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-accent"><Sparkles/> Personality Insights</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
                    <p>{result.personalityInsights}</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-accent"><Star/> Your Strengths</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
                     <p>{result.strengths}</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-accent"><Zap/> Potential Weaknesses</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
                     <p>{result.weaknesses}</p>
                </CardContent>
            </Card>
            <div className="text-center">
                <Button onClick={resetForm} variant="secondary" size="lg">Generate Another Chart</Button>
            </div>
        </div>
    )
  }

  return (
    <Card className="max-w-xl mx-auto bg-card/50">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time of Birth (24h)</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="birthLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City & Country of Birth</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. London, UK" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Revealing the Cosmos...
                </>
              ) : (
                "Generate Interpretation"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
